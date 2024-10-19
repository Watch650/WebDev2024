import React, { useState } from "react";
import { Carousel } from "antd";
import { IoMdArrowBack } from "react-icons/io";
import modellessons from "../data/modellessons.jsx";
import modelquizzes from "../data/modelquizzes.jsx";
import "./CourseContent.css";
import { useNavigate } from "react-router";

const CourseContent = () => {
  const [whatLesson, setWhatLesson] = useState(modellessons[0]);
  const [isLesson, setIsLesson] = useState(true);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(-1);
  };

  return (
    <div className="course-content-container">
      <div className="cc-nav">
        <button onClick={handleRedirect} className="back-btn">
          <IoMdArrowBack />
        </button>
        <div className="nav-lesson">
          <h4 className="lessons-title">Your lessons</h4>
          {modellessons.map((lesson, index) => {
            return (
              <div
                onClick={() => {
                  setWhatLesson(lesson);
                  setIsLesson(true);
                }}
                className="lesson-card"
                key={index}
              >
                <div className="lc-title">{lesson.title}</div>
                <div className="lc-time">{lesson.time} mins</div>
              </div>
            );
          })}
        </div>

        <div className="nav-quiz">
          <h4 className="quizzes-title">Your quizzes</h4>
          {modelquizzes.map((quiz, index) => {
            return (
              <div
                onClick={() => {
                  setWhatLesson(quiz);
                  setIsLesson(false);
                }}
                className="quiz-card"
                key={index}
              >
                <div className="qc-title">{quiz.title}</div>
                <div className="qc-time">{quiz.time} mins</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cc-content">
        <div className="content-header">
          <h2>{whatLesson.title}</h2>
          <div>{whatLesson.desc}</div>
        </div>

        <div className="content-body">
          {isLesson && (
            <>
              <video
                className="cb-video"
                src={whatLesson.video}
                width="100%"
                height="50%"
                controls="controls"
                autoPlay={true}
              />
              <br />
              <h3>What you will learn?</h3>
              <br />
              <p className="cb-paragraph">{whatLesson.content}</p>
            </>
          )}
        </div>

        <div className="content-carousel">
          <Carousel
            arrows
            infinite={true}
            draggable={true}
            slidesToShow={5}
            slidesToScroll={1}
          >
            {modellessons.map((carousel, index) => {
              return (
                <div className="carousel-card" key={index}>
                  <img
                    className="crs-thumbnail"
                    src="https://picsum.photos/240/150"
                    alt=""
                  />
                  <div className="crs-title">{carousel.title}</div>
                  <div className="crs-time">{carousel.time} mins</div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
