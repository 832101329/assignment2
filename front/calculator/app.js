<script>

        /* limpa o display */
        document.getElementById("clear").addEventListener("click", function () {
            document.getElementById("display").value = "";
        });

        document.getElementById("back").addEventListener("click", function () {
            var cur = document.getElementById("display").value;
            cur = cur.substr(0, cur.length - 1);
            document.getElementById("display").value = cur;
        });
        /* recebe os valores */
        function get(value) {
            document.getElementById("display").value += value;
        }

        /* calcula */
        function calculates() {
            try {
                var exp = "";
                exp = document.getElementById("display").value;
                document.getElementById("display").value = "";
                var ans = "";
                ans = eval(exp);
                if (ans == "Infinity") {
                    ans = "error for 0!";
                }
                document.getElementById("display").value = ans;
                axios({
                    method: "post",
                    url: "http://localhost:8080/cal/save",
                    params: {
                        "expression": exp,
                        "ans": ans
                    }
                })
            } catch (SyntaxError) { //set error conditions
                document.getElementById("display").value = "error!";
            }
        };

        function getLast() {
            axios({
                method: "get",
                url: "http://localhost:8080/cal/get"
            }).then(result => {
                document.getElementById("display").value = result.data;
            })

            axios({
                method: "get",
                url: "http://localhost:8080/cal/history"
            }).then(result => {
                const historyData = result.data.slice(0, 10).join("\n");
                const historyTextArea = document.getElementById("history");
                historyTextArea.value = historyData;
            })
        }


        // sending test
        function testFun() {
            axios({
                method: "get",
                url: "http://localhost:8080/hello"
            }).then(result => {
                console.log(result.data);
            })
        }

    </script>