"""added is_completed field

Revision ID: 16347c51d54f
Revises: db06c25e33f9
Create Date: 2024-09-15 21:47:00.866533

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '16347c51d54f'
down_revision = 'db06c25e33f9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('todo', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_complete', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('todo', schema=None) as batch_op:
        batch_op.drop_column('is_complete')

    # ### end Alembic commands ###
