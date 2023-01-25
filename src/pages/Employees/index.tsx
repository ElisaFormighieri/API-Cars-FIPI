import { Contentainer, Header, LogoContainer, Logo, AutoLuby, Logout, TitleItem, Content, TableContainer, SubtitleContainer, SubtitleItem, RightSubtitleContainer, InputContainer, Input, MagnifyingGlassIcon, Table, FirstTableRow, TableHeader, TableRow, TableData } from './styles';
import { FiLogOut } from 'react-icons/fi';
import { Paginator } from '../../components/Paginator';
import { useState } from 'react';
import { paginateArray } from '../../fakeApiData/paginateFakeData';
import { fakeEmployeesData } from '../../fakeApiData/fakeEmployeesData'
import { useNavigate } from 'react-router-dom';


export function Employees (){
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  const numberOfDataPerPage = 5;
  console.log (fakeEmployeesData)

  const paginatedfakeEmployeesData = paginateArray(numberOfDataPerPage, fakeEmployeesData );
  console.log (paginatedfakeEmployeesData)

  const totalPages = paginatedfakeEmployeesData.length;

  const novaLista = paginatedfakeEmployeesData[currentPage].map((employee: any) => (
    <TableRow>
      <TableData> {employee.name} </TableData>
      <TableData> {employee.email} </TableData>
      <TableData> {employee.cpf} </TableData>
      <TableData> {employee.value} </TableData>
      <TableData> {employee.bio} </TableData>
    </TableRow>
  ));

 return (
  <Contentainer>
    <Header>
      <LogoContainer>
        <Logo src="/assets/icons/Logo.svg" alt="Logo" />
        <AutoLuby src="/assets/icons/AutoLuby.svg" alt="AutoLuby" />
      </LogoContainer>

      <Logout>
        <div
          onClick={() => navigate ('/')}
          style={{
            cursor: 'pointer',
          }}>
          Sair
        </div>
        <FiLogOut color="#ffffff" size={18} />
      </Logout>
    </Header>

    <TitleItem> Funcionários </TitleItem>
    <Content>
      <TableContainer>
        <SubtitleContainer>
          <SubtitleItem>
            {' '}
            Listagem de funcionários da empresa{' '}
          </SubtitleItem>

          <RightSubtitleContainer>
            <Paginator
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            <InputContainer>
              <Input />
              <MagnifyingGlassIcon
                src="/assets/icons/search.svg"
                alt="MagnifyingGlassIcon"
              />
            </InputContainer>
          </RightSubtitleContainer>
        </SubtitleContainer>

        <Table>
          <FirstTableRow>
            <TableHeader>NOME</TableHeader>
            <TableHeader>EMAIL</TableHeader>
            <TableHeader>CPF</TableHeader>
            <TableHeader>VALOR</TableHeader>
            <TableHeader>BIO</TableHeader>
          </FirstTableRow>

          {novaLista}
        </Table>
      </TableContainer>
    </Content>
  </Contentainer>
);

}