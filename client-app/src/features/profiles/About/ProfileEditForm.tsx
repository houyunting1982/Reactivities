import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import { observer } from "mobx-react-lite";
import {
    combineValidators,
    isRequired
} from "revalidate";
import { IProfile } from "../../../app/models/profile";
import TextInput from "../../../app/common/form/TextInput";
import TextAreaInput from "../../../app/common/form/TextAreaInput";

const validate = combineValidators({
    displayName: isRequired("displayName")
});

interface IProps {
    profile: IProfile;
    updateProfile: (profile: Partial<IProfile>) => void;
}

const ProfileEditForm: React.FC<IProps> = ({ profile, updateProfile }) => {
    return (
            <FinalForm 
                validate={validate}
                initialValues={profile}
                onSubmit={values => {
                    updateProfile(values);
                }}
                render={({ handleSubmit, invalid, pristine, submitting}) => (
                    <Form onSubmit={handleSubmit} error>
                        <Field
                            name='displayName'
                            placeholder='displayName'
                            value={profile.displayName}
                            component={TextInput}
                        />
                        <Field
                            name='bio'
                            placeholder='bio'
                            rows={3}
                            value={profile.bio}
                            component={TextAreaInput}
                        />
                        <Button
                            floated='right'
                            positive
                            type='submit'
                            content='Update profile'
                            disabled={invalid || pristine}
                            loading={submitting}
                        />
                    </Form>
                )}
            />
    );
};

export default observer(ProfileEditForm);
