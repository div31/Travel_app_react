import React from 'react';
import { Row, Col} from 'react-bootstrap';
import './Blog.css';

function Blog() {
    return (
        <div>
                <Row>
                    <Col>
                        <img className="blog__img" src="img-blog.jpg" alt=" " />
                    </Col>
                    <Col>
                        <div>
                            <h2 className="blog__title mx-2">
                                Top 15 Places to travel this summer
                            </h2>
                            <p className="blog__text mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="extra__text mx-2">Donec a fermentum est. Pellentesque vehicula metus ac orci scelerisque eleifend. Nulla tincidunt sodales augue, a auctor erat scelerisque ac. Nullam varius, erat nec mollis tincidunt, augue augue aliquam nibh, at convallis mi velit eu tellus. Proin a nunc pulvinar, lobortis arcu eu, volutpat enim...</p>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}

export default Blog
