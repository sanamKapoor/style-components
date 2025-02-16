import { Card, Flex } from '../styles/Layout';
import { Button } from '../styles/Button';

export const ButtonDemo = () => {
    return (
        <Card padding="2rem" hoverable>
            <h2>Buttons</h2>
            <Flex gap="1rem" wrap>
                <Button variant="primary" size="medium">
                    Primary
                </Button>
                <Button variant="secondary" size="medium">
                    Secondary
                </Button>
                <Button variant="outline" size="medium">
                    Outline
                </Button>
            </Flex>

            <Flex gap="1rem" wrap style={{ marginTop: '1rem' }}>
                <Button variant="primary" size="small">
                    Small
                </Button>
                <Button variant="primary" size="medium">
                    Medium
                </Button>
                <Button variant="primary" size="large">
                    Large
                </Button>
            </Flex>
        </Card>
    );
}; 