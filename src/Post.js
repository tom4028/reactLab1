import React from "react";
import Image from "./Image";
import Title from "./Title";
import Text from "./Text";



const Post = (props) =>(

    <div className="container">
        
            <Title title={props.title}/>
                <Image />
                <p className="text-muted">
                    Cillum est ipsum nisi officia sit eu esse fugiat laborum minim ea. Deserunt incididunt et quis et cillum sit pariatur in. Consequat velit excepteur culpa sint quis proident veniam laboris aliqua qui exercitation.
                </p>
           
        
    </div>
)

export default Post;