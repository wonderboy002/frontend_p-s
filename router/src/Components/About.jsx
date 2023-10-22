import React from 'react';

function About() {
  return (
    <div className="main flex flex-col justify-center items-center">

    <div className='flex mx-auto gap-8 justify-center items-center my-16'>
     <img className="w-96" src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
     <div className='flex flex-col w-1/2 flex-wrap items-center justify-center gap-4 '>
      <h1 className='text-2xl font-bold'>Hey, There I am Nipun Kupatkar .</h1>
      <h1 className='text-2xl font-bold'>A frontend Web developer</h1>
      <h1 className='text-2xl font-bold'> I value User experience over everything else</h1>
      <p className='text-xl font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ducimus nisi expedita numquam corporis sequi tempora mollitia aspernatur, facere quia consequuntur illo id vitae tenetur, accusantium blanditiis aliquid, quo impedit?</p>
     </div>
    </div>
    </div>

  );
}

export default About;
