import {Container, Row, Col} from 'react-bootstrap'
import myImage from '../img/zulhaditya-bw.jpeg'

export default function Resume(){
    return(
        <Container fluid className='g-0' style={{background:'#383a59'}}>

            <Container style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <Row style={{minHeight:'50vh', backgroundColor:'yellow', marginTop:200, marginBottom:'50vh'}}>
                    <Col xs={12} md={5} style={{backgroundColor:'#282836'}}>
                        <img src={myImage} alt='myImage' height='680' width='403' style={{position:'absolute', marginTop:-100,marginLeft:70}}/>
                    </Col>
                    <Col xs={12} md={7} style={{backgroundColor:'#282836'}}>
                        <h1 className='judul-aboutMe' style={{fontSize:68, fontWeight:'bold', marginTop:30}}>About Me</h1>
                        <h2 className='sub-judul-aboutMe'style={{fontSize:28, fontWeight:'bold', color:'rgb(139, 233, 253)'}}>20 tahun / Mahasiswa / Kepulauan Riau</h2>
                        <p style={{fontSize:18}}>Prolific, full stack web developer with a passion for metrics and beating former "best-yets." Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2015 Webby for Best Navigation and Structure.
                        Prolific, full stack web developer with a passion for metrics and beating former "best-yets." Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2015 Webby for Best Navigation and S</p>
                    </Col>

                    <Col style={{marginLeft:20, fontWeight:'bold'}}></Col>


                </Row>
            </Container>

        </Container>
    )

}
