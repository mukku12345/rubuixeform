import React from 'react';
import classes from './Form.module.css'
import Registration from './Registration';
// import icons from './images'

function Form() {
  return (
    <div className={classes.container}>
        <div className={classes.header}>
            
            <div> <img className={classes.hImages} src='https://www.thebalancemoney.com/thmb/zZm2HctcmYrUMggHjTjTYRvyM0M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/always-seeking-for-opportunities-for-climbing-up-the-corporate-ladder-827546880-f82fa7878c7f448c810169c7e419320f.jpg' alt='headerimage'/></div>
            {/* sorry to say  i have used icon but i did not get any free icon and the icon which i want to use from font awasome did not working */}
               <div className={classes.headings}> <h1 className={classes.tech}>Tech <p className={classes.for}>For</p></h1>
                <h2 className={classes.teens}>Teens</h2>
                <p className={classes.hpara}>CARVING FUTURE<br/>TECHNOLOGY PROFESSIONALS <br/> OUT OF YOUNG MINDS</p>
                </div>
        </div>

        <div className={classes.h2}>
            <div className={classes.left}>
                <h3>WHO WE ARE</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>when an unknown printer took</p>

            </div>
            <div className={classes.right}>
                <img className={classes.imageh2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvp6H8dvtR5YUfM0USXpOg08px8Drucg9Maw&usqp=CAU" alt='image2'/>
                <div className={classes.h2box}></div>
            </div>

        </div>
        <div className={classes.h3}>
            <div className={classes.h3child}>
            <h2>WHERE WE STARTED</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took</p>
            </div>
        </div>
        <div className={classes.h4}>
            <h4 className={classes.h4heading}>TECH FOR TEENS-A RUBIXE @ INITIATIVE</h4>
            <div className={classes.h4child}>

            <div className={classes.card1} >
                <div className={classes.card1child}>
                    <div className={classes.card1child2}><p >01</p>
                    </div>
                    </div>
             <img className={classes.image03}  src='https://static.vecteezy.com/system/resources/previews/015/308/131/original/computer-ai-brain-icon-outline-style-vector.jpg'/>
                <p  className={classes.para}>Introducing AI to <br/>Children in an age<br/> appropiate manner</p>
           


            </div>

            <div className={classes.card2}>
                <p className={classes.para}>Gain awareness <br/> on AI and build an <br/> Interactive story<br/>  around it</p>
           <img className={classes.image03} src="https://i.pinimg.com/originals/d6/7a/91/d67a91bfe9061f7698b5133bdec193ca.jpg"/>

            <div className={classes.card2child}>
                    <div className={classes.card2child2}><p >02</p>
                    </div>
                    </div>

            </div>
                

            <div className={classes.card3}>
            <div className={classes.card3child}>
                    <div className={classes.card3child2}><p >03</p>
                    </div>
                    </div>
           <img className={classes.image03} src="https://t4.ftcdn.net/jpg/02/76/45/81/360_F_276458166_u3SAn4fEqSzg2fdv2CVzaKExDd7K79Or.jpg"/>
                <p className={classes.para}>Acquire<br/>  programming skills<br/>  in a user-friendly <br/> formal</p>

            </div>

            <div className={classes.card4}>
                <p className={classes.para}>Exposur to mini <br/>  projects on diverse topics<br/></p>
           <img className={classes.image03} src="https://thumbs.dreamstime.com/b/linear-ai-grid-icon-artificial-intellegence-future-technology-outline-collection-thin-line-vector-isolated-white-140048457.jpg"/>
            <div className={classes.card4child}>
                    <div className={classes.card4child2}><p >04</p>
                    </div>
                    </div>

            </div>
               
            <div className={classes.card5}>
            <div className={classes.card5child}>
                    <div className={classes.card5child2}><p >05</p>
                    </div>
                    </div>
            <img  className={classes.image03} src='data:image/png;base64,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'/>
                <p className={classes.para}>Train the teachers<br/>programme<br/></p>

            </div>
            </div>

        </div>
        <div className={classes.h5}>
               <div className={classes.h5child}>
               <div className={classes.h5left}>
                <div className={classes.h5content}>
                    <h2>GET IN TOUCH</h2>
                    <p>Please complete the form and we will <br/>get back to you</p>
                    </div>
                 </div>
                 <div className={classes.h5right}>
                    <Registration/>
                 </div>

               </div>

        </div>
        <div className={classes.h6}>
            <div className={classes.h6child}>
            <div>
                <p>LoremIpsum <br/> is simply dummy text of the printing<br/> and typesetting industry.<br/> Lorem Ipsum has been the industry's standard<br/> dummy text ever since the 1500s,<br/> when an unknown printer</p>

            </div>
            <div><p>chandirgdh<br/>email<br/>name<br/>contact number</p></div>
            <div><p>marketing associate<br/>banglore<br/>abc@gmail.com</p></div>
            <div><p>Dhramkhor karan<br/> pakdi babu <br/>deoria uttar pradesh 274702</p></div>

        </div>
        </div>



    </div>
  )
}

export default Form;