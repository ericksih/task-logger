import React from 'react';

const Info = () => {
  return (
    <div
      style={{
        textAlign: 'right',
      }}
    >
      <a className='btn modal-trigger waves-effect waves-teal' href='#modal1'>
        About
      </a>
      <div
        id='modal1'
        className='modal center-align text-darken-2 grey-text text-darken-2'
      >
        <div className='modal-content'>
          <h4>What is this?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
            beatae, necessitatibus iure omnis modi facilis eligendi explicabo
            nesciunt soluta numquam sequi optio ut? Debitis distinctio quaerat
            dignissimos sequi harum, ut quo aut amet eos. Fugiat, esse rem
            voluptate quia temporibus cum quasi cumque exercitationem omnis
            impedit, incidunt itaque minima, quae animi aut hic ut sapiente.
            Dolor nesciunt, hic pariatur eveniet explicabo officiis esse maxime
            deleniti, temporibus quasi possimus asperiores veniam illum iure?
            Aliquam eveniet magnam unde. Et itaque aperiam veniam vitae ea,
            similique dolorum deleniti numquam facilis facere placeat illo
            doloribus libero totam mollitia? Dignissimos aperiam explicabo eaque
            ut.
          </p>
        </div>
        <div className='modal-footer'>
          <a href='#!' className='modal-close waves-effect waves-teal btn-flat'>
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
