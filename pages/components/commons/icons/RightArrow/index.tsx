import Icons from "..";
import { FaArrowRight } from 'react-icons/fa';

const LeftArrow = ({className}: any) => {
    return(<>
    <Icons className={className}>
        <FaArrowRight />
    </Icons>
    </>
    )
}

export default LeftArrow