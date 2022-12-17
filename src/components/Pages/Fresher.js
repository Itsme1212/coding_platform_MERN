import React from "react";

import NavBar from '../NavBar'
import './Notes.css';

import { useNavigate } from 'react-router-dom';

export const Fresher = () => {
    const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <div>
        <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>

<div className="code-main">
Arrays
        <div className="box-model">

  <p>Given two arrays, arr1 and arr2 of equal length N, the task is to find if the given arrays are equal or not. </p>

  <button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/"}>View problem</button>


  <button className="btn btn-warning mx-2" onClick={() => {
                        navigate('/editor')
                    }}>Solve</button>

<hr className="hr-main"/>

<p>Rearrange array alternatively	 </p>

<button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form/"}>View problem</button>


<button className="btn btn-warning mx-2" onClick={() => {
                      navigate('/editor')
                  }}>Solve</button>


<hr className="hr-main"/>

<p>Missing number in array</p>

<button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/find-the-missing-number/"}>View problem</button>


<button className="btn btn-warning mx-2" onClick={() => {
                      navigate('/editor')
                  }}>Solve</button>



<hr className="hr-main"/>

<p>Minimum Platforms</p>

<button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/"}>View problem</button>


<button className="btn btn-warning mx-2" onClick={() => {
                      navigate('/editor')
                  }}>Solve</button>

<hr className="hr-main"/>


<p>Stock buy and sell	 </p>

<button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/stock-buy-sell/"}>View problem</button>


<button className="btn btn-warning mx-2" onClick={() => {
                      navigate('/editor')
                  }}>Solve</button>
<hr className="hr-main"/>

        </div>
        <br />
      </div>


      {/*  sda*/}




      <div className="code-main">
      Matrix

        <div className="box-model">

  <p>Rotate a matrix	 </p>

  <button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/rotate-matrix-elements/"}>View problem</button>


  <button className="btn btn-warning mx-2" onClick={() => {
                        navigate('/editor')
                    }}>Solve</button>

<hr className="hr-main"/>

<p>Spirally traversing a matrix </p>

<button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/"}>View problem</button>


<button className="btn btn-warning mx-2" onClick={() => {
                      navigate('/editor')
                  }}>Solve</button>


<hr className="hr-main"/>

<p>Search in a row wise and column wise sorted matrix	</p>

<button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/"}>View problem</button>


<button className="btn btn-warning mx-2" onClick={() => {
                      navigate('/editor')
                  }}>Solve</button>



<hr className="hr-main"/>

<p>Find the row with maximum number of 1s</p>

<button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/"}>View problem</button>


<button className="btn btn-warning mx-2" onClick={() => {
                      navigate('/editor')
                  }}>Solve</button>

<hr className="hr-main"/>


<p>Check if all rows of a matrix are circular rotations of each other</p>

<button className="btn btn-warning" onClick={"https://www.geeksforgeeks.org/check-rows-matrix-circular-rotations/"}>View problem</button>


<button className="btn btn-warning mx-2" onClick={() => {
                      navigate('/editor')
                  }}>Solve</button>
<hr className="hr-main"/>

        </div>
        <br />
      </div>


      </div>


    </>
  );
};