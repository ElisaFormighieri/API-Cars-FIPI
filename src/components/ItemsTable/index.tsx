import {
  Contentainer,
  Header,
  LogoContainer,
  Logo,
  AutoLuby,
  Logout,
  TitleItem,
  SubtitleContainer,
  SubtitleItem,
  InputContainer,
  Input,
  MagnifyingGlassIcon,
  Table,
  TableHeader,
  TableRow,
  TableData,
  Content,
  RightSubtitleContainer,
  FirstTableRow,
  TableContainer,
} from './styles';
import { FiLogOut } from 'react-icons/fi';
import { paginateArray } from '../../fakeApiData/paginateFakeData';
import { Paginator } from '../Paginator';
import { useState } from 'react';
import { fakeCarsData } from '../../fakeApiData/fakeCarsData'
import { useNavigate } from 'react-router-dom';



export function ItemsTable() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  const numberOfDataPerPage = 7;

  const paginatedfakeCarsData = paginateArray(numberOfDataPerPage, fakeCarsData);

  const totalPages = paginatedfakeCarsData.length;

  const novaLista = paginatedfakeCarsData[currentPage].map((carro: any) => (
    <TableRow>
      <TableData> {carro.brand} </TableData>
      <TableData> {carro.model} </TableData>
      <TableData> {carro.year} </TableData>
      <TableData> {carro.KM} </TableData>
      <TableData> {carro.color} </TableData>
      <TableData> {carro.status} </TableData>
      <TableData> {carro.chassi} </TableData>
      <TableData> R$ {carro.value} </TableData>
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

      <TitleItem> Seus Veículos </TitleItem>
      <Content>
        <TableContainer>
          <SubtitleContainer>
            <SubtitleItem>
              {' '}
              Listagem de veículos reservados e vendidos{' '}
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
              <TableHeader>MARCA</TableHeader>
              <TableHeader>MODELO</TableHeader>
              <TableHeader>ANO</TableHeader>
              <TableHeader>KM</TableHeader>
              <TableHeader>COR</TableHeader>
              <TableHeader>STATUS</TableHeader>
              <TableHeader>CHASSI</TableHeader>
              <TableHeader>VALOR</TableHeader>
            </FirstTableRow>

            {novaLista}
          </Table>
        </TableContainer>
      </Content>
    </Contentainer>
  );
}
