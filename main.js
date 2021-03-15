var buttonReverse, pressed, inside,

            white = "#fff",
            purple = {
                firstPurple: "#8a2b8a",
                secondPurple: "#4d0240",
                thirdPurple: "#22001d",
                fourthPurple: "#ba55d3"                
            },
            dark = {
                aroundDark: "#585353",
                firstDark: "#222"
            }

            window.addEventListener("click", changeMode)

            function changeMode(event) {

                pressed = event.target.dataset.target
                inside = document.querySelector(".inside").style.left

                buttonReverse = document.querySelector(`[data-target="${pressed}"]`)
                if(buttonReverse){
                    
                    if(inside != "45%"){
                        document.querySelector(".inside").style.setProperty("left", "45%")
                        document.querySelector("body").style.setProperty("background", dark.firstDark)
                        document.querySelector(".form-input").style.setProperty("--secondPurple", dark.firstDark)
                        document.querySelector(".form-input1").style.setProperty("--secondPurple", dark.firstDark)
                        document.querySelector(".inside").style.setProperty("--secondPurple", dark.firstDark)
                        document.querySelector(".form").style.setProperty("--firstPurple", dark.aroundDark)
                        document.querySelector(".around").style.setProperty("--firstPurple", dark.aroundDark)
                        document.querySelector(".login").style.setProperty("color", "#666466")
                        document.querySelector(".register").style.setProperty("color", white)
                    }
                    else{
                        document.querySelector(".inside").style.setProperty("--secondPurple", purple.secondPurple)
                        document.querySelector(".inside").style.setProperty("left", "5%")
                        document.querySelector("body").style.setProperty("background",
                        "linear-gradient(50deg," + purple.firstPurple + " 0%,	" +
                        purple.secondPurple + " 47%,	" + purple.thirdPurple + " 100%)")
                        document.querySelector(".form-input").style.setProperty("color", white)
                        document.querySelector(".form-input1").style.setProperty("color", white)
                        document.querySelector(".login").style.setProperty("color", white)
                        document.querySelector(".register").style.setProperty("color", purple.fourthPurple)
                        document.querySelector(".form").style.setProperty("--firstPurple", purple.firstPurple)
                        document.querySelector(".around").style.setProperty("--firstPurple", purple.firstPurple)
                        document.querySelector(".inside").style.setProperty("--secondPurple", purple.secondPurple)
                    }
                }             
            }
