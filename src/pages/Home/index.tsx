import { Play } from 'phosphor-react'
import { HomeContainer, FormContainer, CountdownContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will work</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount">during</label>
          <input type="number" id="minutesAmount" />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Start
        </button>
      </form>
    </HomeContainer>
  )
}
