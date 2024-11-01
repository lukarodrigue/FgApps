import { Container } from "./styles";

import Input from "../Input/index"

export function Nav() {
  return (
    <Container>
      <select>
        <option value="Home">Home</option>
        <option value="">Visitar Site</option>
      </select>

      <button type="submit" href="#">Furgão Peugeot</button>
      <button type="submit" href="#" >Caminhão</button>
      <button type="submit" href="#" >FG Maracaju</button>
      <button type="submit" href="#" >Montagem</button>

      <form method="post" class="j_geraRelatorio">
        <label>Gerar Relatório:</label>
        
        <input type="date" name="dataInicial" value="2024-11-01" required=""/>
        
        <input type="date" name="dataFinal" required=""/>
        
        <button>OK</button>
      </form>

        </Container>
        )
}