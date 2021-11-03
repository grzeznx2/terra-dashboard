import { BoxContent, Button } from '..'
import './Box.scss'

const Box = ({ title, linkType, linkTo, data = {}, hasGetInfo }) => {
  const buttonsDisabled = Object.keys(data).length === 0

  let displayLink = linkTo
  if (linkTo?.length > 20) {
    let firstPart = linkTo.slice(0, 8)
    let lastPart = linkTo.slice(-8)
    displayLink = `${firstPart}...${lastPart}`
  }

  return (
    <>
      <div className="box">
        <div className="box__top">
          <div className="box__title-wrapper">
            <h3 className="box__title">{title}</h3>
            {linkTo && (
              <a className="box__title-link" href={`https://finder.terra.money/columbus-5/${linkType}/${linkTo}`} target="blank">
                {displayLink}
              </a>
            )}
          </div>
        </div>
        <div className="box__middle">
          <BoxContent data={data} />
        </div>
        {hasGetInfo && (
          <div className="box__bottom">
            <div className="box__title-wrapper">
              <h3 className="box__title">Getting this info</h3>
            </div>
            <div className="box__button-wrapper">
              <Button disabled={buttonsDisabled}>CLI</Button>
              <Button disabled={buttonsDisabled}>CosmWasm</Button>
              <Button disabled={buttonsDisabled}>TerraJS</Button>
              <Button disabled={buttonsDisabled}>Python</Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Box
