import profile from '../assets/profile.jfif'
import {React,useState} from 'react';
import '../components/Page.css';
import {data} from '../constants';

const StoryItem = ({story:{imgUrl,title}}) => (
    <div className='stories'>
      <div className='img'>
        <img src={imgUrl} alt="img" />
        <p> {title}</p>
      </div>
    </div>
);



const Post= ({post:{personImg,Img,name,caption}}) =>{

    const [style, setStyle] = useState("postbottom a");
    const changeStyle=()=>{
          setStyle("like");
    };
return (
    
    
    <div className='post'>
        <div className="postWrapper">
            <div className="posttop">
                <div className="postleft">
                    <img src={personImg} alt="user" />
                    <span className='username'>{name}</span>
                </div>
            </div>

            <div className="postcenter">
                <img src={Img} alt="postImg" />
            </div>

            <div className="postbottom">
                <div className="icons">
                        <a className={style} href="/" ><i onClick={changeStyle} className="fas fa-heart"></i></a>
                        <a href="/" ><i className="fas fa-comment"></i></a>
                        <a href="/" ><i className="fas fa-bookmark"></i></a>
                </div> 
            </div>
                <span className='posttext'>Liked by 45 people</span>
                <br/>
                <span className="posttext">{caption}</span>
        </div>     
    </div>
)
}




const Page=()=>{
    return (

        // Sidebar
        <div className="frpage">
            <div className="sidebar">
                <ul className="links">
                    <li ><a href="#home"><i class="fas fa-home"></i></a></li>
                    <li ><a href="#about"><i class="fas fa-comments"></i></a></li>
                    <li ><a href="#menu"><i class="fas fa-compass"></i></a></li>
                    <li ><a href="#awards"><i class="fas fa-video"></i></a></li>
                    <li ><a href="#contact"><i class="fas fa-cog"></i></a></li>
                </ul>
            </div>

        <div className="posts">
                    {data.posts.map((post)=>
                        <Post post={post} key={post.title} />
                    )}
        </div>


        <div className="profile">
            <div className="profilepic">
               <img  src={profile} alt="profilepic" />
            </div>
            <h3 className='text-center username'> @JKCoop</h3>
            <div className="work">Wildlife Photographer</div>
            <button className="button"><span style={{color: 'white'}}>Edit</span></button>


            <div className="stats">
               <div>
                <h3 className='text-center' style={{margin:'0.5rem'}}>98</h3>
                <h3 className='stat' >Posts</h3>
               </div>
               <div>
                <h3 className='text-center' style={{margin:'0.5rem'}}>3.5k</h3>
                <h3 className='stat' >Followers</h3>      
               </div>
               <div>
                <h3 className='text-center' style={{margin:'0.5rem'}}>900</h3>
                <h3 className='stat' >Following</h3>        
               </div>
            </div>
            <div className="description">
                <h4>Jake Cooper</h4>
                <p>My speciality lies in creating colorful creations, amazing designs, and high quality wesite artworks that hae the potential to capture the attention while making a very positive first impression on the visitor...</p>
            </div>  


            <div className="stories">
                <h5>Your Stories</h5>
                <div className="story">
                    {data.stories.map((story)=>
                        <StoryItem story={story} key={story.title} />
                    )}
                </div>
            </div>
        </div>



        </div>
        


    );
};

export default Page;


