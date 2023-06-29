
export const SizeTShirt = ({ sizes }) => {

  return (
    <>
        <div className="size-container">
            <label htmlFor="talla">Talla: </label>
            <select name="talla" id="talla" data-testid="select" >
                <option value=''></option>
                {
                    sizes.map( (size, i) => {
                        return <option value={size} key={i}>{size}</option>
                    })
                }
            </select>
        </div>
    </>
  )
}