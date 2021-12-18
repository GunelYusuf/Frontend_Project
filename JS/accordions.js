        $(document).ready(function () {
            $("#accordion-1 .paragraphs").find(".title").mouseover(function () {
                if ($(this).next().css("display") === "none") {
                    $(this).css({
                        transition: "all 0.3s ease-out",
                        background: "#f34f3f"
                    });
                    $(this).find("h6").css({ color: "#ffffff" });
                    $(this).find("i").css({ color: "#ffffff" });
                }
            });

            $("#accordion-1 .paragraphs").first().find(".title").click(function () {
                if ($(this).next().css("display") === "none") {
                    $(this).css({
                        transition: "all 0.3s ease-out",
                        background: "#f34f3f"
                    });
                    $(this).find("h6").css({ color: "#ffffff" });
                    $(this).find("i").css({ color: "#ffffff" });
            
                }
                else {
                    $(this).css({
                        transition: "all 0.3s ease-out",
                        background: "#ffffff"
                    });
                    $(this).find("h6").css({ color: "#1b1b1b" });
                    $(this).find("i").css({ color: "#1b1b1b" });
                
                }

                $("#accordion-1 .paragraphs").first().find(".title").not($(this)).find("i").css({ color: "#1b1b1b" });
                $("#accordion-1 .paragraphs").first().find(".title").not($(this)).find("h6").css({ color: "#1b1b1b" });
                $("#accordion-1 .paragraphs").first().find(".title").not($(this)).css({ background: "#ffffff" });


                $(this).next().slideToggle(500);
                $("#accordion-1 .paragraphs").first().find(".content").not($(this).next()).slideUp(500);
            });

            $("#accordion-1 .paragraphs").last().find(".title").click(function () {
                if ($(this).next().css("display") === "none") {
                    $(this).css({
                        transition: "all 0.3s ease-out",
                        background: "#f34f3f"
                    });
                    $(this).find("h6").css({ color: "#ffffff" });
                    $(this).find("i").css({ color: "#ffffff" });
                   
                }
                else {
                    $(this).css({
                        transition: "all 0.3s ease-out",
                        background: "#ffffff"
                    });
                    $(this).find("h6").css({ color: "#1b1b1b" });
                    $(this).find("i").css({ color: "#1b1b1b" });
                   
                }

                $("#accordion-1 .paragraphs").last().find(".title").not($(this)).find("i").css({ color: "#1b1b1b" });
                $("#accordion-1 .paragraphs").last().find(".title").not($(this)).find("h6").css({ color: "#1b1b1b" });
                $("#accordion-1 .paragraphs").last().find(".title").not($(this)).css({ background: "#ffffff" });

                $(this).next().slideToggle(500);
                $("").last().find(".content").not($(this).next()).slideUp(500);
            })

        });
