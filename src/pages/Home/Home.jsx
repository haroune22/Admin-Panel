import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widget from '../../Components/Widget/Widget'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/Chart/Chart'
import './Home.scss'
import List from '../../Components/table/Table'
const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
              <Widget type="user"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <List/>
            </div>
        </div>
    </div>
  )
}

export default Home