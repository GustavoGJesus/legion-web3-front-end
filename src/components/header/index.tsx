// styles
import { Button, HeaderContent, HeaderWrapper } from "./styles";

// images
import Logo from "../../assets/logo.svg";


export function Header() {
    return (
      <HeaderWrapper>
        <HeaderContent>
            <img src={Logo} alt="logo" style={{ width: "120px"}}/>
          <Button>Contact us</Button>
        </HeaderContent>
      </HeaderWrapper>
    );

}