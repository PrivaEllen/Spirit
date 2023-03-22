class BackgroundButtons {
    setBackgroundDark(){
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "#121212";
        let rounds = document.getElementsByClassName("round");
        for (const e of rounds){
            if (e.classList.contains("round_active"))
            e.classList.remove("round_active");
        }
        document.getElementById("round_dark").classList.add("round_active");
    }
    setBackgroundGreen(){
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "#1f2621";
        let rounds = document.getElementsByClassName("round");
        for (const e of rounds){
            if (e.classList.contains("round_active"))
            e.classList.remove("round_active");
        }
        document.getElementById("round_green").classList.add("round_active");
    }
    setBackgroundPurple(){
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "#29152a";
        let rounds = document.getElementsByClassName("round");
        for (const e of rounds){
            if (e.classList.contains("round_active"))
            e.classList.remove("round_active");
        }
        document.getElementById("round_purple").classList.add("round_active");
    }
    setBackgroundBlue(){
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "#162831";
        let rounds = document.getElementsByClassName("round");
        for (const e of rounds){
            if (e.classList.contains("round_active"))
            e.classList.remove("round_active");
        }
        document.getElementById("round_blue").classList.add("round_active");
    }
    setBackgroundRed(){
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "#311f21";
        let rounds = document.getElementsByClassName("round");
        for (const e of rounds){
            if (e.classList.contains("round_active"))
            e.classList.remove("round_active");
        }
        document.getElementById("round_red").classList.add("round_active");
    }
}

const backgroundButtons = new BackgroundButtons()

export default backgroundButtons