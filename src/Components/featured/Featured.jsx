import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import './Featured.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredCahart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="tile">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
        Previous transactions processing. Last payments may not be included.
        </p>
      </div>
      <div className="summary">
        <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
                <KeyboardArrowUp fontSize='small'/>
                <div className="resultAmount">$12.4</div>
            </div>
        </div>
        <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
                <KeyboardArrowUp fontSize='small'/>
                <div className="resultAmount">$12.4</div>
            </div>
        </div>
        <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
                <KeyboardArrowDown fontSize='small'/>
                <div className="resultAmount">$12.4</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured