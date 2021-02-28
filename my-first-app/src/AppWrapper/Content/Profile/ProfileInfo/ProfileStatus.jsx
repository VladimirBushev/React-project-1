import ProfileInfoStyle from './ProfileInfo.module.css'
import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        debugger
        return (
            <>
                { this.props.changeStatus !== undefined ?
                    <div className={ProfileInfoStyle.statusDiv}>
                        <div>
                            <span className={ProfileInfoStyle.status} onClick={this.activateEditMode}>{this.props.status || ''}</span>
                        </div>
                    </div>
                    :
                    <div className={ProfileInfoStyle.statusDiv}>
                        {this.state.editMode ?
                            <div>
                                <input className={ProfileInfoStyle.input} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} type="text" />
                            </div>
                            :
                            <div>
                                <span className={ProfileInfoStyle.status} onClick={this.activateEditMode}>{this.props.status || 'Введите ваш статус'}</span>
                            </div>
                        }
                    </div>}
            </>
        )
    }
}

export default ProfileStatus