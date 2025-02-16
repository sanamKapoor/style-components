import { Card, Badge, Flex } from '../styles/Layout';

export const BadgeDemo = () => {
    return (
        <Card padding="2rem" style={{ marginTop: '2rem' }}>
            <h2>Badges</h2>
            <Flex gap="1rem" wrap>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
            </Flex>
        </Card>
    );
}; 