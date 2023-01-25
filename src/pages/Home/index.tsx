import { LogoContainer, Logo, SearchCar, Logout, WelcomeHome, Menu, Header, Container, Content, FirstImageItem, TextBox, TitleItem, FirstItemBox, SubTatle, Result} from "./styles"
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Select } from "../../components/Select";

type Option = {
  value: string;
  label: string;
}

type ApiObject = {
  nome: string
  codigo: string
}

type ApiValueResult = {
  Valor: string
  Marca: string
  Modelo: string
  AnoModelo: number
  Combustivel: string
  CodigoFipe: string
  MesReferencia: string
  TipoVeiculo: number
  SiglaCombustivel: string
}

export function Home (){
  const navigate = useNavigate();
  const [brands, setBrands] = useState<Option[]>([]);
  const [models, setModels] = useState<Option[]>([]);
  const [years, setYears] = useState<Option[]>([]);

  const [brand, setBrand] = useState<Option | null>(null);
  const [model, setModel] = useState<Option | null>(null);
  const [year, setYear] = useState<Option | null>(null);
  const [result, setResult] = useState< null | ApiValueResult>(null); 

  async function getBrands() {
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`);

    const brands: ApiObject[]  = await response.json();
    const newArray = brands.map((element: ApiObject) => ({label: element.nome, value: element.codigo}))
    setBrands(newArray);
    console.info(`brands`,brands);
  }

  async function getModels(brandCode: string) {
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`);

    const models: {anos: any, modelos: ApiObject[]}  = await response.json();
    
    const newArray = models.modelos.map((element: ApiObject) => ({label: element.nome, value: element.codigo}))
    setModels(newArray); 
  }

  async function getYears(brandCode: string, modelCode: string) {
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos`);

    const years: ApiObject[]  = await response.json();
    const newArray = years.map((element: ApiObject) => ({label: element.nome, value: element.codigo}))
    setYears(newArray);
  }

  async function getResult (brandCode: string, modelCode: string, yearCode: string) {
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`);
    const result: ApiValueResult = await response.json();
    setResult(result); 
  }
  console.log(result)

  useEffect(()=> {
    getBrands()
  },[])

  useEffect(()=> {
    setModel(null)
    if(!!brand){
      getModels(brand.value)
    }

  },[brand])

  useEffect(()=> {
    setYear(null)
    if(!!brand && !!model){
      getYears(brand.value,model.value)
    }

  },[brand, model])

  useEffect (() => {
    if (!!brand && !!model && !!year){
    getResult(brand.value,model.value,year.value)
  }
  }, [year, brand, model])

  useEffect (() =>{
    setResult(null)
    if (!!brand && !!model && !! year){
      getResult (brand.value,model.value,year.value)
    }
  }, [brand, model, year])

return (

<Container>
  <Header>
    <LogoContainer>
      <Logo src = '/assets/images/logo.png' alt = 'Logo'/>
      <SearchCar> SeachCar </SearchCar> 
    </LogoContainer>

    <Logout onClick={() => navigate (-1)}>
            <div
              style={{
                cursor: 'pointer'
              }}
            >
              Sair
            </div>
            <FiLogOut color="#ffffff" size={18} />
    </Logout>
  </Header>

  <Content>
    <WelcomeHome>Bem-vindo</WelcomeHome>
    <Menu>Menu</Menu>

  
    <FirstItemBox>
      <TextBox>
      <TitleItem> Your Vehicle Search </TitleItem>

        <SubTatle> Brand </SubTatle>
        <Select
         value={brand}
         onChange={(value: Option)=> setBrand(value)}
         options={brands}
        />     
        <SubTatle>Model</SubTatle>
        <Select
        value={model}
        onChange={(value: Option)=> setModel(value)}
        options={models}
        /> 
        <SubTatle> Year</SubTatle>
        <Select
        value={year}
        onChange={(value: Option)=> setYear(value)}
        options={years}
        /> 
        <Result>
          Value = {result?.Valor}
        </Result>
      </TextBox>

      <div>
        <FirstImageItem/>
      </div>
    </FirstItemBox>
  </Content>

</Container>
)
}