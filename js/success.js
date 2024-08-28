
$("#gform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwi71xLmYJHY-GsoRJDzYEYF4l3t1Xx2LaoAs8i8lKAY5VcOoGDujE4ERNAHU2HcdF6/exec",
        data:$("#gform").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
