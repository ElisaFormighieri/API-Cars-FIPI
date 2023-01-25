import { forwardRef } from 'react'
import ReactSelect, { Props } from 'react-select'

type SelectProps = Props & {
  onChange: any
  isInvalid: boolean
  menuListMaxHeight?: number
}

export const Select = forwardRef((props: any, ref: any) => {
  const customStyles = {
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: state.isDisabled ? '#e5e5e5' : '#9D9D9F',
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      pointerEvents: 'auto',
      cursor: state.isDisabled ? 'not-allowed' : 'pointer',
      borderRadius: 8,
      backgroundColor: 'none',
      borderColor: state.isDisabled
        ? '#e5e5e5'
        : state.isFocused
        ? '#0157AE'
        : props.isInvalid
        ? '#e53e3e'
        : '#BDBEBF',
      boxShadow: state.isFocused
        ? '0 0 0 1px #0157AE'
        : props.isInvalid
        ? '0 0 0 1px #e53e3e'
        : 'none',
      '&:hover': {
        borderColor: state.isDisabled
          ? '#e5e5e5'
          : state.isFocused
          ? '#0157AE'
          : props.isInvalid
          ? '#e53e3e'
          : '#BDBEBF',
      },
    }),

    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: state.isDisabled ? '#e5e5e5' : '#9D9D9F',
    }),
    clearIndicator: (provided: any, state: any) => ({
      ...provided,
      color: '#9D9D9F',
      display: 'none',
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,

      borderRadius: 8,
      border: '1px solid #EFEFEF',
      background: '#FFFFFF',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      paddingTop: 20,
      paddingBottom: 16,
      maxHeight: props.menuListMaxHeight || 500,
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      background: 'none',
      border: 'none',
      boxShadow: 'none',
      marginTop: 0,
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      color: '#1F1F20',
      background: 'none',
      '&:hover': {
        background: '#FFEDE0',
        cursor: 'pointer',
      },
    }),
  }
  return (
    <ReactSelect
      isClearable={false}
      noOptionsMessage={() => null}
      loadingMessage={() => 'Carregando...'}
      styles={customStyles}
      ref={ref}
      {...props}
    />
  )
})