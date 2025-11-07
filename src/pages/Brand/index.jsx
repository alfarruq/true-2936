import './style.css'
import bosh from '../../assets/True.png';
import ikki from "../../assets/Text.png";
import fit from '../../assets/fit.png';
import infa from '../../assets/infa.png'
function Brand() {
    return (
        <div className="container">
            <img src={bosh} alt="" />
            <img className='img' src={ikki} alt="" />
            <img className='img' src={fit} alt="" />
            <img className='img' src={infa} alt="" />
        </div>
    );
}

export default Brand;