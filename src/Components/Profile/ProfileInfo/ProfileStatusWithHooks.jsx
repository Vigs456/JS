
import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

      let [editMode, setEditMode] = useState(false);
      let [status, setStatus] = useState(props.status);

      useEffect(() => {
            setStatus(props.status);
      }, [props.status])

      const activatedEditMode = () => {
            setEditMode(true);
      }

      const deactiveEditMode = () => {
            setEditMode(false);
            props.updateStatus(status);
      }

      const onStatusChange = (e) => {
            setStatus(e.currentTarget.value);
      }

      return  (
            <div>
                  {!editMode &&
                        <div>
                              <span onDoubleClick={activatedEditMode} >{props.status || 'No status'}</span>
                        </div>
                  }
                  {editMode &&
                        <div>
                              <input  autoFocus={true} onBlur={deactiveEditMode} onChange={onStatusChange}
                              value={status}/>
                        </div>
                  }
            </div>
      )           
}

export default ProfileStatusWithHooks;