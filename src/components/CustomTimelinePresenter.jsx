import styled from '@emotion/styled'

export const SiderbarButton = styled.button`
  width: 150px;
  height: 63px;
  padding: 0px;
  color: white;
  font-weight: 800;
  font-size: 1rem;
  background-color: #d1cebd;
  text-align: center;
  outline: none;
  text-decoration: none;
`
export const MarkerText = styled.div`
  margin: -20px 0 0 0;
  background: #000000;
`
export const Infomodal = styled.div`
  :hover {
    position: relative;
    left: 100px;
    bottom: 50px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    font-size: 20px;
    border-radius: 5;
    color: #ed1212;
    cursor: pointer;
  }
`
export const ItemModal = styled.div`
  background-color: #fefefe;
  padding: 0px 20px 0px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: rgb(62, 62, 60);
  max-width: 400px;
  min-width: 250px;
  line-height: 40px;
  position: absolute;
  z-index: 100;
  box-shadow: 5px 5px #e2e2e3;
`

export const InfoLabel = styled.div`
  position: fixed;
  left: 100px;
  bottom: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  font-size: 20px;
  border-radius: 5;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`
export const LabelStyles = styled.div`
  height: itemContext.dimensions.height;
  overflow: hidden;
  padding-left: 3;
  text-overflow: ellipse;
  whitespace: nowrap;
`
export const customStyles = {
  position: 'absolute',
  border: '2px solid #000000',
  backgroundColor: 'crimson',
  width: '0px',
  margin: '15px 0  0 0',
  zIndex: 50,
  top: 0
}

export const DateHeaderBottomStyle = {
  height: '100%',
  width: '100%',
  color: 'white',
  fontWeight: '350',
  textAlign: 'center'
}
export const DateHeaderTopStyle = {
  color: 'white',
  fontWeight: '700',
  textAlign: 'center'
}

export const MouseEnterStyle = styled.div`
  /* Rectangle 2 */

  position: absolute;
  width: 171.34px;
  height: 42px;

  background: #f1f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  /* Note: backdrop-filter has minimal browser support */
`
export const MouseEnterSquare = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;

  background: #f1f1f1;
  transform: rotate(45deg);
`
