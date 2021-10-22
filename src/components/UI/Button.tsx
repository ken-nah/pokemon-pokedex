import styled, { css } from 'styled-components';

const colors: Color = {
  dark: '#233240',
  fire: '#FFC300',
  ice: '#0099FF',
  grass: '#0caa2c',
  electric: '#d23c3c',
  water: '#03173A',
  ground: '#e2c5a9',
  rock: '#81817b',
  fairy: '#E7D00F',
  poison: '#F21B42',
  bug: '#900C3F',
  dragon: '#0a3077',
  psychic: '#b2b811',
  flying: '#1566F4',
  fighting: '#999386',
  normal: '#F21B42',
  steel: '#a7a765',
};

type ButtonProps = {
  color?: string;
  size?: 'small' | 'medium' | 'large';
};

type Color = {
  [key: string]: string;
};

interface Props extends ButtonProps {
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.color ? colors[props.color] : '#00AAFF')};
  border-radius: 5px;
  color: var(--color-white);
  cursor: pointer;
  padding: 1rem 3rem;
  min-width: 10rem;
  font-weight: 700;

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.5rem 0.8rem;
      min-width: 5rem;
      font-size: 1.2rem;
    `}
`;

const Button: React.FC<Props> = (props) => {
  const { color, size } = props;

  const handleClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <StyledButton color={color} onClick={handleClick} size={size}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
