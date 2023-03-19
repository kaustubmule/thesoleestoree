import React from 'react'
import "./Filter.css";

function Filter() {
  return (
    <div>
    <div class="post-filter container">        
    <span class="filter-item active-filter" data-filter="all">All</span>        
    <span class="filter-item" data-filter="html">Performance</span>        
    <span class="filter-item" data-filter="adon">Ad~ons</span>        
    <!-- <span class="filter-item" data-filter="reward">Rewards</span> -->    
    </div>    
    <section class="post container">        
    <div class="post-box html">            
    <img src="https://www.renaultgroup.com/wp-content/uploads/2021/07/r-dam-1096063-min.jpeg" alt=""                class="post-img">            
    <h2 class="category">EV</h2>            
    <a href="./motor.html" class="post-title">                Motors in EV            </a>            
    <p class="post-description">Key component that converts electrical energy from the battery into mechanical                energy to power the vehicle. </p>        
    </div>        
    <div class="post-box adon">            
    <img src="https://cdn.mobilesyrup.com/wp-content/uploads/2020/11/Bolt-ev-crossover-infotatinment-scaled.jpg"                alt="" class="post-img">            
    <h2 class="category">EV</h2>            
    <a href="./Infotainment.html" class="post-title">                Infotainment in EV            </a>            
    <p class="post-description">Provides information and entertainment to the driver and passengers, emphasizes                the benefits of using an electric vehicle (EV) over a traditional gasoline-powered car</p>        
    </div>        
    <div class="post-box html">            
    <img src="https://d2n4wb9orp1vta.cloudfront.net/cms/brand/mms/2022-mms/mms-0822-photo-ultiumbattery.jpg"                alt="" class="post-img">            
    <h2 class="category">EV</h2>            
    <a href="./battery.html" class="post-title">EV Batteries</a>            
    <span class="post-date"></span>            
    <p class="post-description">A crucial component that provides the power for the electric motor.</p>        
    </div>    
    </section>    
    </div>
  )
}


export default Filter