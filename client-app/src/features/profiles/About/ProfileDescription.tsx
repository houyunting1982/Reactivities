import React, { useContext, useState } from "react";
import { Tab, Grid, Header, Button } from "semantic-ui-react";
import { RootStoreContext } from "../../../app/stores/rootStore";
import { observer } from "mobx-react-lite";
import ProfileEditForm from "./ProfileEditForm";

const ProfileDescription = () => {
    const rootStore = useContext(RootStoreContext);
    const {
        profile,
        isCurrentUser,
        updateProfile,
    } = rootStore.profileStore;
    // eslint-disable-next-line
    const [editAboutMode, setEditAboutMode] = useState(false);
    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16} style={{ paddingBottom: 0 }}>
                    <Header
                        floated='left'
                        icon='user times'
                        content={`About ${profile!.displayName}`}
                    />
                    {isCurrentUser && (
                        <Button
                            floated='right'
                            basic
                            content={editAboutMode ? "Cancel" : "Edit Profile"}
                            onClick={() => setEditAboutMode(!editAboutMode)}
                        />
                    )}
                </Grid.Column>
                <Grid.Column width={16}>
                    {editAboutMode && isCurrentUser ? (
                        <ProfileEditForm
                            profile={profile!}
                            updateProfile={updateProfile}
                        />
                    ) : (
                        <span>{profile!.bio}</span>
                    )}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    );
};

export default observer(ProfileDescription);
