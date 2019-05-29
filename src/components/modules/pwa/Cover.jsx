import {
  React,
  styled,
  Section,
  Placeholder
} from '../../../../config/imports'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const StyledImg = styled.img`
  width: 85%;
  margin: auto;
`

export default () => (
  <Section xl left>
    <StyledImg src={Placeholder} alt='Placeholder' />
    <StyledCall>
      <h1>What is a Progressive Web App?</h1>
      <p>
        Progressive Web Apps are a standard for websites
        employing key technologies to make a website
        function almost exactly like a native application on
        phones and tablets.
      </p>
    </StyledCall>
  </Section>
)
