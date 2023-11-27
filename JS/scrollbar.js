
window.onload = () => {
    window.addEventListener("scroll", () => {
        let height = document.documentElement.scrollHeight - window.innerHeight
        let pos = window.scrollY
        let width = document.documentElement.clientWidth
        let bar = (pos / height * width)
        document.getElementById("progress").style.width = bar+"px"
        // document.getElementById("progress").style.width = window.scrollY /
        //                                                     (document.documentElement.scrollHeight - window.innerHeight) *
        //                                                     document.documentElement.clientWidth + "px"
    })
}
