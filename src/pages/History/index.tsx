import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New task 1</td>
              <td>25 minutes</td>
              <td>2 months ago</td>
              <td>Done</td>
            </tr>
            <tr>
              <td>New task 1</td>
              <td>25 minutes</td>
              <td>1 months ago</td>
              <td>Done</td>
            </tr>
            <tr>
              <td>New task 1</td>
              <td>25 minutes</td>
              <td>2 weeks ago</td>
              <td>Done</td>
            </tr>
            <tr>
              <td>New task 1</td>
              <td>25 minutes</td>
              <td>3 hours ago</td>
              <td>Done</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
