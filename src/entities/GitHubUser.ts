import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class GitHubUser extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    github_id: number

  @Column()
    login: string

  @Column()
    node_id: string

  @Column()
    avatar_url: string

  @Column()
    gravatar_id: string

  @Column()
    url: string

  @Column()
    html_url: string

  @Column()
    followers_url: string

  @Column()
    following_url: string

  @Column()
    gists_url: string

  @Column()
    starred_url: string

  @Column()
    subscriptions_url: string

  @Column()
    organizations_url: string

  @Column()
    repos_url: string

  @Column()
    events_url: string

  @Column()
    received_events_url: string

  @Column()
    type: string

  @Column()
    site_admin: boolean

  @Column({ nullable: true }) // Marking optional attributes as nullable
    name: string

  @Column({ nullable: true })
    company: string

  @Column({ nullable: true })
    blog: string

  @Column({ nullable: true })
    location: string

  @Column({ nullable: true })
    email: string

  @Column({ nullable: true })
    hireable: boolean

  @Column({ nullable: true })
    bio: string

  @Column({ nullable: true })
    twitter_username: string

  @Column()
    public_repos: number

  @Column()
    public_gists: number

  @Column()
    followers: number

  @Column()
    following: number

  @Column()
    created_at: string

  @Column()
    updated_at: string

  @Column()
    private_gists: number

  @Column()
    total_private_repos: number

  @Column()
    owned_private_repos: number

  @Column()
    disk_usage: number

  @Column()
    collaborators: number

  @Column()
    two_factor_authentication: boolean
}
