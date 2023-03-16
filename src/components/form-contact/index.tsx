import { Container, ContainerForm, ContentForm, Input, Paragraph, Title} from "./styles";


export function ContactForm() {
  return (
    <>
      <Container>
        <Paragraph>Let's talk</Paragraph>
        <Title>Contact us</Title>

        <Paragraph>Let's work together</Paragraph>

        <ContainerForm>
          <ContentForm>
            <label htmlFor="">Name</label>
            <Input type="text" />

            <label htmlFor="">Email</label>
            <Input type="text" />

            <label htmlFor="">Telegram</label>
            <Input type="text" />

            <label htmlFor="">Description project</label>
            <Input type="text" name="" id="" />
          </ContentForm>
        </ContainerForm>
      </Container>
    </>
  );
}