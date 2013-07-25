$(document).ready(function(){

      var currentBalance1 = $('#balance1').html()

      var currentBalance2 = $('#balance2').html()

      function color1() {
        if (currentBalance1 == "$0") {
        $("#checkingAccount").css('background-color', '#F51111');
      } else {
        $("#checkingAccount").css('background-color', '#6C9A74');
      }
    }

    function color2() {
      if (currentBalance2 == "$0") {
        $("#savingsAccount").css('background-color', '#F51111');
      } else {
        $("#savingsAccount").css('background-color', '#6C9A74');
      }
    }

      $('#checkingDeposit').click(function increase(){
        currentBalance = parseInt(currentBalance1.slice(1))
        var user_input = parseInt($('#checkingAmount').val())
        if (user_input > 0) {
          newValue = currentBalance + user_input
          $('#balance1').html("$" + newValue)
          currentBalance1 = "$" + newValue
          color1()
          color2()
        }
        })

      $('#checkingWithdraw').click(function decrease(){
        currentBalance = parseInt(currentBalance1.slice(1))
        currentBalance2 = parseInt(currentBalance2.slice(1))
        var user_input = parseInt($('#checkingAmount').val())
        if (currentBalance >= user_input) {
          newValue = currentBalance - user_input
          $('#balance1').html("$" + newValue)
          currentBalance1 = "$" + newValue
          currentBalance2 = "$" + currentBalance2
        }
        else if ((currentBalance + currentBalance2) >= user_input) {
          newValue = (currentBalance2 + currentBalance - user_input)
          $('#balance1').html("$" + 0)
          $('#balance2').html("$" + (newValue))
          currentBalance1 = "$" + 0
          currentBalance2 = "$" + (newValue)
        }
        else {
          currentBalance1 = "$" + (currentBalance)
          currentBalance2 = "$" + (currentBalance2)
        }
        color1()
        color2()
        })


      $('#savingsDeposit').click(function increase(){
        currentBalance = parseInt(currentBalance2.slice(1))
        var user_input = parseInt($('#savingsAmount').val())
        if (user_input > 0) {
          newValue = currentBalance + user_input
          $('#balance2').html("$" + newValue)
          currentBalance2 = "$" + newValue
          color2()
          color1()
        }
        })

      $('#savingsWithdraw').click(function decrease(){
        currentBalance = parseInt(currentBalance2.slice(1))
        currentBalance1 = parseInt(currentBalance1.slice(1))
        var user_input = parseInt($('#savingsAmount').val())
        if (currentBalance >= user_input) {
          newValue = currentBalance - user_input
          $('#balance2').html("$" + newValue)
          currentBalance2 = "$" + newValue
          currentBalance1 = "$" + currentBalance1
        }
        else if ((currentBalance + currentBalance1) >= user_input) {
          newValue = (currentBalance1 + currentBalance - user_input)
          $('#balance2').html("$" + 0)
          $('#balance1').html("$" + (newValue))
          currentBalance2 = "$" + 0
          currentBalance1 = "$" + (newValue)
        }
        else {
          currentBalance1 = "$" + (currentBalance1)
          currentBalance2 = "$" + (currentBalance)
        }
        color2()
        color1()
        })
  })