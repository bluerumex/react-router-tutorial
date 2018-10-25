import React from 'react';

const Post = ({locaction, match}) => {
    console.log('Post: ', match)

    return (
        <p>
            포스트 #{match.params.id}
        </p>
    )
};

export default Post;