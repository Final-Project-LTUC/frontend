import React, { useContext, useEffect, useState } from "react";
import "./notifications.css";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { LoginContext } from "../../hooks/Context/LoginProvider";

function Notifications({
  
  payload,
  socket,
  inquiryDatePayload,
}) {
  const { loginData } = useContext(LoginContext);
  
console.log("loginData",loginData)
  const handleOptionClick = (option, payload) => {
    console.log("paylodaaaaaaaaaaaaaa",payload)
    if (option === "archive") {
      console.log('yeah i want it')
      payload.choice = true;
      socket.emit("continue", payload);

    } else if (option === "delete") {
      payload.choice = false;
      payload.taskStatus = 'cancelled'
      socket.emit("serviceRejected", payload);
    }
  };

  useEffect(() => {

    let optionBtns = document.querySelectorAll(".js-option");

    for (var i = 0; i < optionBtns.length; i++) {
      optionBtns[i].addEventListener("click", function (e) {
        var notificationCard = this.parentNode.parentNode;
        var clickBtn = this;

        requestAnimationFrame(function () {
          archiveOrDelete(clickBtn, notificationCard);

          window.setTimeout(function () {
            requestAnimationFrame(function () {
              notificationCard.style.transition = "all .4s ease";
              notificationCard.style.height = 0;
              notificationCard.style.margin = 0;
              notificationCard.style.padding = 0;
            });

            window.setTimeout(function () {
              notificationCard.parentNode.removeChild(notificationCard);
            }, 1500);
          }, 1500);
        });
      });
    }

    var archiveOrDelete = function (clickBtn, notificationCard) {
      if (clickBtn.classList.contains("archive")) {
        notificationCard.classList.add("archive");
        handleOptionClick("archive", payload);
      } else if (clickBtn.classList.contains("delete")) {
        notificationCard.classList.add("delete");
        handleOptionClick("delete", payload);
      }
    };
  }, [ payload]);

  return (
  <div className="wrapper">
    <div className="wrapper">
      <div className="notifications">
        {payload.taskStatus==="current" ? (
          <div className="notifications__item">
            <div className="notifications__item__avatar">
              <img src={payload.avatarSrc} alt={`Avatar of ${payload.title}`} />
            </div>
            <div className="notifications__item__content">
              <span className="notifications__item__title">New Notification</span>
              <span className="notifications__item__message">
                appointment: {payload.schdualedAt}
              </span>
            </div>
            <div>
              <div className="notifications__item__option archive js-option">
                <i className="fas fa-folder">
                  {" "}
                  <CheckIcon />
                </i>
              </div>
              <div className="notifications__item__option delete js-option">
                <i className="fas fa-trash">
                  <CloseIcon />
                </i>
              </div>
            </div>
          </div>
        ) : null}
        {
          (
          <>
          
            {payload && payload.choice && payload.clientId===loginData.user.id && (
              <div className="notifications__item">
                <div className="notifications__item__content">
                  <span className="notifications__item__message">
                    You have agreed to the service {loginData.user.username} and paid {payload.inquiryPrice}
                  </span>
                </div>
              </div>
            )}
            {payload && payload.choice && payload.handymanId===loginData.user.id && (
              <div className="notifications__item">
                <div className="notifications__item__content">
                  <span className="notifications__item__message">
                  Client {payload.clientName} has agreed and paid {payload.inquiryPrice} Jod
                  </span>
                </div>
              </div>
            )}
            {payload && !payload.choice && payload.handymanId===loginData.user.id && (
              <div className="notifications__item">
                <div className="notifications__item__content">
                  <span className="notifications__item__message">
                  Client {payload.clientName} has canceled the service
                  </span>
                </div>
              </div>
            )}
          </>
        )
        }
      </div>
    </div>
  </div>
);
            }
export default Notifications;
