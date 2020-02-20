
import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
      if (!profile) {
            return <Preloader />
      }

    return  (
      <div>
            {<div className={s.cover_image} >
                  <img src="https://abduzeedo.com/sites/default/files/originals/0ec5c569226647.5b79b483096c1.jpg" />
            </div>}
            <div className={s.descriptionBlock}>
                  <img src={profile.photos.large} />
                  <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div> 
      </div>)
}

export default ProfileInfo;