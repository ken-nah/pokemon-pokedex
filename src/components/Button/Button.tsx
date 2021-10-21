import styled, { css } from 'styled-components';

const colors: Color = {
  fire: '#FFC300',
  grass: '#98d7a5',
  electric: '#FCF7DE',
  water: '#03173A',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#F21B42',
  bug: '#900C3F',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#1566F4',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

type ButtonProps = {
  color?: string;
  size?: 'small' | 'medium' | 'large';
};

type Color = {
  [key: string]: string;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.color ? colors[props.color] : '#98d7a5')};
  border-radius: 5px;
  color: var(--color-white);
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

const Button: React.FC<ButtonProps> = (props) => {
  const { color, size } = props;

  return (
    <StyledButton color={color} size={size}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
