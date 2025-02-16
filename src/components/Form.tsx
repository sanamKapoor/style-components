import { Grid, Card } from '../styles/Layout';
import {
    Input,
    FormGroup,
    Label,
    Select,
    ErrorMessage,
    TextArea,
} from '../styles/Form';

export const FormDemo = () => {
    return (
        <Card padding="2rem" style={{ marginTop: '2rem' }}>
            <h2>Form Elements</h2>
            <Grid columns={2} gap="2rem" responsive>
                <FormGroup>
                    <Label>Username</Label>
                    <Input placeholder="Enter username" />
                    <ErrorMessage>This field is required</ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label>Category</Label>
                    <Select>
                        <option value="">Select category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Label>Message</Label>
                    <TextArea placeholder="Enter your message" />
                </FormGroup>
            </Grid>
        </Card>
    );
};
