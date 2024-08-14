export default function Comments() {

    function post(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`)
    }


    return (
        <div className="comment--container">
            <h1>TEST</h1>
            {/* <h1 className="comment--title">답글 남기기</h1>
            <h2 className="comment-info">이메일 주소는 공개되지 않습니다. 필수 필드는 *로 표시됩니다</h2>
            <h2 className="comment-info">댓글 *</h2> */}


            <form className="comment-form"  action={post}>
            <input 
                name="query"
                type="text"
            />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}