// react or any library related to react
import { ReactNode } from "react";

// styles
import { CardContent, CardWrapper, Title } from "./styles";

// types props
interface CardsProps{
  title: string;
  children: ReactNode;
}

export function Cards({ title, children }: CardsProps) {
  return (
      <CardWrapper>
        <CardContent>
          <Title>{title}</Title>

        {children}
        </CardContent>
      </CardWrapper>
  );
}