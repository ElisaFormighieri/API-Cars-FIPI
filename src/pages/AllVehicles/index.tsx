import {
  Contentainer,
  Header,
  LogoContainer,
  Logo,
  SearchCar,
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
import { Paginator } from '../../components/Paginator';
import { useState } from 'react';
import { fakeCarsData } from '../../fakeApiData/fakeCarsData';
import { useNavigate } from 'react-router-dom';


export function AllVehicles() {
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
    </TableRow>
  ));

  return (
    <Contentainer>
      <Header>
        <LogoContainer>
          <Logo src="/assets/images/logo.png" alt="Logo" />
          <SearchCar> SearchCar </SearchCar>
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

      <TitleItem> Todos os Veículos </TitleItem>
      <Content>
        <TableContainer>
          <SubtitleContainer>
            <SubtitleItem>
              {' '}
              Listagem geral de veículos {' '}
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
              <TableHeader>MONTH REFERENCES</TableHeader>
              <TableHeader>BRANDS BY TYPE</TableHeader>
              <TableHeader>YEARS BY MODEL</TableHeader>
              <TableHeader>FIPE INFO</TableHeader>
              <TableHeader>YEARS BY FIPE CODE</TableHeader>
              <TableHeader>FIPE INFO</TableHeader>
              <TableHeader>FIPE PRICE HISTORY</TableHeader>
            </FirstTableRow>

            {novaLista}
          </Table>
        </TableContainer>
      </Content>
    </Contentainer>
  );
}
