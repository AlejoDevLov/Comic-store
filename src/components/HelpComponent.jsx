
export const HelpComponent = ({ helpIcon, classIcon }) => {

  return (
    <>
        <div className={classIcon} ref={helpIcon}>
            <h4>¿Necesitas ayuda?</h4>
            <h4>Sobre Nosotros</h4>
            <h4>Contáctanos</h4>
        </div>
    </>
  )
}
