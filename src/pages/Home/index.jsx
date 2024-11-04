import { Calendar } from "../../components/Calendar";
import { Nav } from "../../components/Nav";
import { Container } from "../Home/styles";


export function Home() {
  return (
    <Container>
      <Nav />
      <Calendar />
    </Container>

  )
}