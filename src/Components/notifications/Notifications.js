import React, { useEffect } from "react";
import "./notifications.css";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

function Notifications() {
  useEffect(() => {
    (function () {
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
        } else if (clickBtn.classList.contains("delete")) {
          notificationCard.classList.add("delete");
        }
      };
    })();
  }, []);

  return (
    <div className="wrapper">
      <div className="wrapper">
        <div className="notifications">
          <div className="notifications__item">
            <div className="notifications__item__avatar">
              <img
                src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_1.jpg"
                alt=""
              />
            </div>

            <div className="notifications__item__content">
              <span className="notifications__item__title">Verdieu Steeve</span>
              <span className="notifications__item__message">
                Just started following you
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
        </div>
      </div>
    </div>
  );
}

export default Notifications;
